import React, { useEffect, useState } from 'react'
import { Plus } from '@strapi/icons';
import { Button } from '@strapi/design-system/Button';
import { Box } from '@strapi/design-system/Box';
import CourseModal from '../../components/CourseModal';
import EntityCard from '../../components/EntityCard';
import { Typography } from '@strapi/design-system';

function CoursesInputButton(props) {
    const { name, onChange, attribute, value } = props;
    const [showModal, setShowModal] = useState(false);
    const [selectedEntityData, setSelectedEntityData] = useState({
        selectedCourse: null,
        entityName: '',
    });

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = (entityData) => {
        setSelectedEntityData(entityData);
        setShowModal(false);
        let JSONString = JSON.stringify(entityData);
        onChange({
            target: { name, value: JSONString, type: attribute.type },
        });
    }

    useEffect(() => {
        if (value && value != 'null') {
            let JSONObject = JSON.parse(value);
            setSelectedEntityData(JSONObject);
        }
    }, [value]);

    return (
        <>
            <Box>
                {selectedEntityData.selectedCourse !== null && selectedEntityData.entityName !== '' ?
                    <EntityCard selectedEntityData={selectedEntityData} openModal={openModal} setSelectedEntityData={setSelectedEntityData} />
                    :
                    <>
                        <Box paddingBottom="4px">
                            <Typography fontWeight="bold" textColor="neutral800">
                                comproDLS - Course
                            </Typography>
                        </Box>
                        <Button onClick={openModal} startIcon={<Plus />}>Link Entity (Course, Event, Resource)</Button>
                    </>
                }
            </Box>
            {showModal && <CourseModal handleClose={closeModal} />}
        </>
    )
}

export default CoursesInputButton