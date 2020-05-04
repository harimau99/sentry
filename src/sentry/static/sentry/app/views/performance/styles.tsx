import styled from '@emotion/styled';

import space from 'app/styles/space';
import overflowEllipsis from 'app/styles/overflowEllipsis';
import {IconQuestion} from 'app/icons';

export const GridBodyCell = styled('div')`
  font-size: 14px;
  padding: ${space(1)} ${space(2)};
  ${overflowEllipsis};
`;

export const GridHeadCell = styled('div')`
  padding: ${space(2)};
`;

export const GridBodyCellNumber = styled(GridBodyCell)`
  text-align: right;
`;

export const SummaryGridRow = styled('tr')`
  display: grid;
  grid-template-columns: auto minmax(70px, 170px) minmax(70px, 230px);
`;

export const HeaderContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${space(2)} ${space(1.5)};
`;

export const HeaderTitle = styled('div')`
  font-size: ${p => p.theme.fontSizeLarge};
  color: ${p => p.theme.gray4};
  padding: 0 ${space(1)};

  span {
    vertical-align: middle;
  }
`;

export const HeaderTitleLegend = styled(HeaderTitle)`
  background-color: ${p => p.theme.white};
  position: absolute;
  z-index: 1;
`;

export const ChartContainer = styled('div')`
  padding: ${space(2)} ${space(1.5)};
`;

export const ChartsGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${space(1)};
`;

export const StyledIconQuestion = styled(IconQuestion)`
  color: ${p => p.theme.gray1};
  margin-left: ${space(1)};
`;

export const ErrorPanel = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  flex-shrink: 0;
  overflow: hidden;
  height: 200px;
  position: relative;
  border-color: transparent;
  margin-bottom: 0;
`;
