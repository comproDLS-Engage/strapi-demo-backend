import React from "react";
import {
    Card,
    CardContent,
    CardBadge,
    CardTitle,
    CardSubtitle,
    Box,
} from '@strapi/design-system';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #CFD9E0;
    box-shadow: rgba(85, 89, 90, 0.2) 0px 4px 16px -8px;
    background-color: #ffffff;
    border-radius: 6px;
    cursor: pointer;
    padding: 0.75rem;
    transition: border-color 0.2s, cursor 0.2s;
    &:hover {
      border-color: rgb(174, 193, 204);
      cursor: pointer;
    }
`;
const StyledCardBody = styled(Box)`
    display: flex;
`;

const StyledCardTitle = styled(CardTitle)`
    font-weight: bold;
    padding: 16px 0px;
`;

const StyledCardSubtitle = styled(CardSubtitle)`
    display: block;
    whiteSpace: nowrap;
    overflow: hidden;
    textOverflow: ellipsis;
    maxWidth: 290px;
    flex: 0 1 auto;
    color: #5A657C;
`;

const StyledImage = styled.img`
    height: 290px;
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
`;


const CourseCard = (props) => {
    const { course, isSelected, onCourseClick, index } = props;

    return (
        <StyledCard id={`courseCard${index}`} onClick={onCourseClick}>
            <StyledImage alt="course image" src={course.thumbnailUrl} />
            <StyledCardBody>
                <CardContent>
                    <StyledCardTitle>{course.title}</StyledCardTitle>
                    <StyledCardSubtitle>ID: {course.bundlecode}</StyledCardSubtitle>
                </CardContent>
                {/* <CardBadge>Course</CardBadge> */}
            </StyledCardBody>
        </StyledCard>
    );
}

export default CourseCard;