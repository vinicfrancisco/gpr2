import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

function Checkbox({ name, options, ...rest }) {
  const [values, setValues] = useState(
    options.map((option) => ({
      id: option.id,
      value: option.value,
      checked: false,
    }))
  );

  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  const getOptionStatus = useCallback(
    (id) => {
      const option = values.find((value) => value.id === id);

      if (!option) {
        return false;
      }

      return option.checked;
    },
    [values]
  );

  const onChange = useCallback((id) => {
    setValues((state) =>
      state.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            checked: !value.checked,
          };
        }

        return value;
      })
    );
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: () => {
        return values
          .filter((value) => value.checked)
          .map((value) => value.value);
      },
      clearValue: () => {
        setValues(
          values.map((value) => ({
            ...value,
            checked: false,
          }))
        );
      },
      setValue: (refs, initialValues) => {
        setValues(
          values.map((value) => {
            if (initialValues.includes(value.id)) {
              return {
                ...value,
                checked: true,
              };
            }

            return value;
          })
        );
      },
    });
  }, [defaultValue, fieldName, values, registerField]);

  return (
    <Container>
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <input
            defaultChecked={defaultValue.find((dv) => dv === option.id)}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            value={option.value}
            type="checkbox"
            id={option.id}
            checked={getOptionStatus(option.id)}
            onChange={() => onChange(option.id)}
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </Container>
  );
}

export default Checkbox;
