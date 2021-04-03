import React, { useState, useEffect } from 'react';

import pt from 'date-fns/locale/pt';

import { format } from 'date-fns';
import {
  Container,
  Top,
  LabelContainer,
  Label,
  ToggleContainerButton,
  CalendarIcon,
  DateFilterContainer,
  DatePicker,
} from './styles';

function DateFilter({ onChange, onClean }) {
  const [selection, setSelection] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [open, handleOpen] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (!first) {
      onChange({
        start_date: format(selection.startDate, 'dd/MM/yyyy'),
        end_date: format(selection.endDate, 'dd/MM/yyyy'),
      });
    }
  }, [selection]);

  function handleSelect(range) {
    setFirst(false);

    setSelection({
      ...selection,
      startDate: range.selection.startDate,
      endDate: range.selection.endDate,
    });

    handleOpen(false);
  }

  function handleClean() {
    handleOpen(false);
    setFirst(true);
    setSelection({ ...selection, startDate: new Date(), endDate: new Date() });
    onClean();
  }

  return (
    <Container>
      <LabelContainer>
        <Label>{` ${format(selection.startDate, 'dd/MM/yyyy')} - ${format(
          selection.endDate,
          'dd/MM/yyyy'
        )}`}</Label>

        <ToggleContainerButton onClick={() => handleOpen(!open)}>
          <CalendarIcon />
        </ToggleContainerButton>
      </LabelContainer>

      {open && (
        <DateFilterContainer>
          <Top>
            <span>Período</span>

            <button type="button" onClick={() => handleClean()}>
              Limpar
            </button>
          </Top>

          <DatePicker
            onChange={(range) => handleSelect(range)}
            showMonthAndYearPickers={false}
            showDateDisplay={false}
            ranges={[selection]}
            locale={pt}
          />
        </DateFilterContainer>
      )}
    </Container>
  );
}

export default DateFilter;
