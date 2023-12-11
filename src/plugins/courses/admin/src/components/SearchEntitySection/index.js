import React, { useState, useEffect } from 'react';
import {
    Typography,
    Flex,
    Box,
} from "@strapi/design-system";
import CourseCard from '../CourseCard';
import { courseData } from '../../utils/coursesData';
import { Illo } from "../../components/Illo";
import styled from 'styled-components';

const StyledCourseFlexBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem
`;

function SearchEntitySection(props) {
    const { setIsCourseSelected, setSelectedCourse } = props;
    const [courses, setCourses] = useState([]);
    const [selectedCourseIndex, setSelectedCourseIndex] = useState();

    const getProductItemsData = (productData) => {
        let productItems = [];
        for (let i = 0; i < productData.result.length; i++) {
            let itemData = {
                productName: productData.result[i].name,
                productImageUrl:
                    productData.meta.paths["public-assets"] +
                    "/" +
                    productData.result[i].model.url,
            };
            productItems.push(itemData);
        }
        return productItems;
    };

    const fetchData = async () => {
        // Extract only the desired keys and create a new array of objects
        const filteredData = courseData.map((item) => ({
            title: item.title,
            description: item["short-description"],
            bundlecode: item["bundle-code"],
            productCode: item.products[0]["dls-product"].code,
            productItemsData: getProductItemsData(item.products[0].product_data),
            accountid: item.dls_account_id,
            thumbnailUrl: item.localImage
                ? item.localImage
                : item.path +
                "/" +
                item.attribs["cover-product-code"] +
                "/" +
                item.image,
            builderUrl: item.builder_url,
        }));

        // Update the state with the filtered data
        setCourses(filteredData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log("courses", courses);

    const onCourseClick = (item, index) => {
        setIsCourseSelected(true);
        setSelectedCourse(item);
        setSelectedCourseIndex(index);
    }

    return (
        <>
            {courses &&
                <StyledCourseFlexBox>
                    {courses.map((item, index) => {
                        return (
                            <Box style={{ maxWidth: "315px", }}>
                                <CourseCard
                                    course={item}
                                    isSelected={index === selectedCourseIndex}
                                    onCourseClick={() => onCourseClick(item, index)}
                                    index={index}
                                />
                            </Box>
                        );
                    })}
                </StyledCourseFlexBox>
            }
            {courses.length === 0 && (
                <Box>
                    <Flex direction="column" justifyContent="center" padding={8}>
                        <Illo />
                        <Typography fontWeight="bold" textColor="neutral800" as="h2">
                            Sorry! No results found.
                        </Typography>
                    </Flex>
                </Box>
            )}</>
    )
}

export default SearchEntitySection