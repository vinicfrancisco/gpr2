import React, { useEffect, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import { useField } from '@unform/core';
import pt from 'date-fns/locale/pt-BR';
import { Container } from './styles';

import './styles.css';

registerLocale('pt-BR', pt);

const Datepicker = ({ name, label, placeholder, ...rest }) => {
  const [value, setValue] = useState(new Date());

  const datepickerRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      getValue: () => {
        return value;
      },
      setValue: (ref, newValue) => {
        setValue(newValue);
      },
      clearValue: () => {
        setValue(null);
      },
    });
  }, [value, fieldName, registerField]);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Container isErrored={!!error}>
      {label && <span>{label}</span>}

      <DatePicker
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        ref={datepickerRef}
        selected={value}
        onChange={(date) => setValue(date)}
        {...rest}
      />
    </Container>
  );
};
export default Datepicker;
