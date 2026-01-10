import styled from "styled-components";

export const SCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const STitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  font-size: 14px;
  font-weight: 600;
`;

export const SBlock = styled.div`
  display: block;
`;

export const SNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const SMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
`;

export const SNavActions = styled.div`
  display: flex;
`;

export const SNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: #94a6be;
  }
`;

export const SContent = styled.div`
  margin-bottom: 12px;
`;

export const SWeekdays = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const SWeekday = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
`;

export const SCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const SCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;

  opacity: ${({ $other }) => ($other ? 0 : 1)};
  color: ${({ $active, $other }) =>
    $other ? "transparent" : $active ? "#fff" : "#94a6be"};
  background-color: ${({ $active }) =>
    $active ? "#94A6BE" : "transparent"};
  font-weight: ${({ $current }) => ($current ? "700" : "400")};

  &:hover {
    background-color: ${({ $other }) =>
      $other ? "transparent" : "#EAEEF6"};
  }
`;

export const SPeriod = styled.div`
  padding: 0 7px;
`;

export const SPeriodText = styled.p`
  color: #94a6be;
  font-size: 10px;

  & span {
    color: #000;
  }
`;