import { DateRange } from 'react-date-range';
import { FiCalendar } from 'react-icons/fi';

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Top = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8px;
  width: 100%;

  span {
    color: #272727;
    font-size: 1rem;
    margin-top: 8px;
  }

  button {
    background: transparent;
    border: 0;
    color: #272727;
    font-size: 1rem;
    margin-top: 8px;
    transition: color 0.5s;
  }

  button:hover {
    color: #911919;
  }
`;

export const LabelContainer = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin: 8px 16px;
`;

export const Label = styled.span`
  color: #272727;
  font-size: 1rem;
`;

export const ToggleContainerButton = styled.button.attrs(() => ({
  type: 'button',
}))``;

export const CalendarIcon = styled(FiCalendar).attrs(() => ({
  color: '#272727',
  size: 20,
}))``;

export const DateFilterContainer = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 8px;
  position: absolute;
  right: 0;
  top: 44px;
`;

export const DatePicker = styled(DateRange)`
  .rdrWeekDay {
    font-size: 0.9rem;
    color: #272727;
  }

  .rdrDay {
    color: #000;
  }

  .rdrDay .rdrDayHovered {
  }

  .rdrDay:focus {
    outline: 0;
  }

  .rdrDayNumber {
    color: #000;
    font-size: 12px;
  }

  .rdrDayToday .rdrDayNumber span:after {
    display: none;
  }

  .rdrSelected,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    background: #911919;
    padding: 12px;
  }

  .rdrSelected:hover,
  .rdrInRange:hover,
  .rdrStartEdge:hover,
  .rdrEndEdge:hover {
    background: #911919;
    padding: 12px;
  }

  .rdrSelected {
    left: 2px;
    right: 2px;
  }

  .rdrDayEndOfMonth .rdrDayInPreview,
  .rdrDayEndOfMonth .rdrDayStartPreview,
  .rdrDayEndOfWeek .rdrDayInPreview,
  .rdrDayEndOfWeek .rdrDayStartPreview .rdrDayEndPreview {
    border-color: #911919;
  }

  .rdrDayStartPreview {
    padding: 13px;
  }

  .rdrDayInPreview {
    padding: 13px;
  }

  .rdrDayEndPreview {
    padding: 13px;
  }
`;
