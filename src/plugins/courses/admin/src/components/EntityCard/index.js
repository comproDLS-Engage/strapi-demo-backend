import React from 'react';
import {
  Typography,
  Box,
  Button,
} from "@strapi/design-system";
import styled from 'styled-components';
import { Popover } from '@strapi/design-system';
import { SimpleMenu, MenuItem } from '@strapi/design-system';
import { Divider } from '@strapi/design-system';
import { EntityName } from '../../utils/constants';
import comproDLSImage from '../../images/comproDLS.png';


const StyledCard = styled(Box)`
    border: 1px solid #eaeaef;
    border-radius: 8px;
`;

const StyledCardHeader = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
`;

const StyledCardContent = styled(Box)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px;
`;

const StyledImage = styled.img`
    width: 30px;
    height: 30px;
`;

function EntityCard(props) {
  const { selectedEntityData, openModal, setSelectedEntityData } = props;
  const selectedCourse = selectedEntityData.selectedCourse;
  const entityName = selectedEntityData.entityName;

  const handleChangeClick = () => {
    openModal();
  }

  const handleRemoveClick = () => {
    setSelectedEntityData({
      selectedCourse: null,
      entityName: '',
    });
  }

  return (
    <StyledCard>
      <StyledCardHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2">
          comproDLS - Course
        </Typography>
        <SimpleMenu label="Menu">
          <MenuItem onClick={handleChangeClick}>Change</MenuItem>
          <MenuItem onClick={handleRemoveClick}>Remove</MenuItem>
        </SimpleMenu>
      </StyledCardHeader>
      <Divider />
      <StyledCardContent>
        <Box>
          {entityName === EntityName.TITLE &&
            <Typography fontWeight="bold" textColor="neutral800">
              {selectedCourse.title}
            </Typography>
          }
          {entityName === EntityName.DESCRIPTION &&
            <Typography fontWeight="bold" textColor="neutral800">
              {selectedCourse.description}
            </Typography>
          }
          {entityName === EntityName.MODULES &&
            <ul>
              {selectedCourse.productItemsData.map((item, index) => {
                return (
                  <li key={index}>
                    <Typography fontWeight="bold" textColor="neutral800">{item.productName}</Typography>
                  </li>
                )
              })}
            </ul>
          }
          <Box paddingTop="16px">
            <Typography textColor="neutral800">
              ID: {selectedCourse.bundlecode}
            </Typography>
          </Box>
        </Box>
        <StyledImage src={comproDLSImage} alt="" />
      </StyledCardContent>
    </StyledCard>
  )
}

export default EntityCard