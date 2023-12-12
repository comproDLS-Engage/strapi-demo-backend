import React, { useState } from 'react';
import {
    Typography,
    Box,
    Button,
} from "@strapi/design-system";
import styled from 'styled-components';
import { ArrowLeft } from '@strapi/icons';
import { EntityName } from '../../utils/constants';

const StyledCourseDetails = styled(Box)`
    background-color: #E7EBEE;
    border-radius: 8px;
    padding: 8px 8px 16px 8px;
`;

const StyledImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 8px;
`;

const StyledArrowLeft = styled(ArrowLeft)`
    margin-right: 8px;
`;

const StyledDetailBox = styled(Box)`
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border: ${props => props.isSelected ? '1px solid #0059C8' : '1px solid transparent'};
    border-bottom: ${props => props.isSelected ? '1px solid #0059C8' : '1px solid #CFD9E0'};
    border-radius: ${props => props.isSelected ? '4px' : ''};
    background-color: ${props => props.isSelected ? 'transparent' : ''};
    &:hover {
      border-radius: 4px;
      background-color: #E8F5FF;
      border: 1px solid #0059C8;
      border-bottom-color: #0059C8;
      cursor: pointer;
    };
    &:last-child {
        border-bottom-color: ${props => props.isSelected ? '#0059C8' : 'transparent'};
    };
    cursor: pointer;
`;

const StyledButtonContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const StyledTypography = styled(Typography)`
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
`;

function EntityDetailsSection(props) {
    const { selectedCourse, setIsCourseSelected, handleClose } = props;
    const [selectedEntity, setSelectedEntity] = useState("");

    // console.log("selectedCourse", selectedCourse);

    const onSelectClick = () => {
        handleClose({
            selectedCourse: selectedCourse,
            entityName: selectedEntity,
        });
    }

    return (
        <Box>
            <StyledCourseDetails>
                <Button variant="ghost" onClick={() => setIsCourseSelected(false)}>
                    <StyledArrowLeft />
                    Back
                </Button>
                <Box display="flex" padding="8px 0px 0px 32px">
                    <StyledImage src={selectedCourse.thumbnailUrl} alt="Course Thumbnail" />
                    <Box paddingLeft="16px">
                        <Typography fontWeight="bold" textColor="neutral800" as="h3" id="title" paddingBottom="8px">
                            {selectedCourse.title}
                        </Typography>
                        <Typography textColor="neutral800">
                            ID: {selectedCourse.bundlecode}
                        </Typography>
                    </Box>
                </Box>
            </StyledCourseDetails>
            <Box padding="24px">
                <StyledDetailBox isSelected={selectedEntity === EntityName.TITLE} onClick={() => setSelectedEntity(EntityName.TITLE)}>
                    <StyledTypography fontWeight="bold" textColor="neutral800" as="h3" paddingBottom="8px">
                        Title:
                    </StyledTypography>
                    <Typography textColor="neutral800">
                        {selectedCourse.title}
                    </Typography>
                </StyledDetailBox>
                <StyledDetailBox isSelected={selectedEntity === EntityName.DESCRIPTION} onClick={() => setSelectedEntity(EntityName.DESCRIPTION)}>
                    <StyledTypography fontWeight="bold" textColor="neutral800" as="h3" paddingBottom="8px">
                        Description:
                    </StyledTypography>
                    <Typography textColor="neutral800">
                        {selectedCourse.description}
                    </Typography>
                </StyledDetailBox>
                <StyledDetailBox isSelected={selectedEntity === EntityName.MODULES} onClick={() => setSelectedEntity(EntityName.MODULES)}>
                    <StyledTypography fontWeight="bold" textColor="neutral800" as="h3" paddingBottom="8px">
                        Modules:
                    </StyledTypography>
                    <ul>
                        {selectedCourse.productItemsData.map((item, index) => {
                            return (
                                <li>
                                    <Typography textColor="neutral800">{item.productName}</Typography>
                                </li>
                            )
                        })}
                    </ul>
                </StyledDetailBox>
            </Box>
            <StyledButtonContainer>
                <Button onClick={onSelectClick}>Select</Button>
            </StyledButtonContainer>
        </Box>
    )
}

export default EntityDetailsSection

// {
//     "title": "Persuasive Grant Writing",
//     "description": "'Persuasive Grant Writing' explains how to use narrative tools to create grant applications that resonate with the audience - your chosen funder. In the course, you will discover how narrative tools can improve the quality of your grant applications, how understanding your funder will help you align your research question with their objectives and how to apply narrative tools across your grant applications to make them more informative and persuasive.",
//     "bundlecode": "persuasivegrantwriting1684319124529",
//     "productCode": "persuasivegrantwriting1684319164125",
//     "productItemsData": [
//         {
//             "productName": "Before starting your grant application",
//             "productImageUrl": "https://asgard-thor-content.comprodls.com/cmp1/products/persuasivegrantwriting1684319164125/1/assets/image/1684319655490/pgw-m1.jpeg"
//         },
//         {
//             "productName": "Targeting your audience",
//             "productImageUrl": "https://asgard-thor-content.comprodls.com/cmp1/products/persuasivegrantwriting1684319164125/1/assets/image/1684319655490/pgw-m1.jpeg"
//         },
//         {
//             "productName": "Creating a narrative",
//             "productImageUrl": "https://asgard-thor-content.comprodls.com/cmp1/products/persuasivegrantwriting1684319164125/1/assets/image/1684319655490/pgw-m1.jpeg"
//         }
//     ],
//     "accountid": "cmp1",
//     "thumbnailUrl": "https://asgard-thor-content.comprodls.com/stage/final/bundles/persuasivegrantwriting1684319124529/assets/persuasivegrantwriting1684319164125/pgw.jpeg",
//     "builderUrl": "https://builder-qa.engage.comprodls.com/?debug=true#/program-eti/courses/academic-research-position/type2/learning-path/0"
// }