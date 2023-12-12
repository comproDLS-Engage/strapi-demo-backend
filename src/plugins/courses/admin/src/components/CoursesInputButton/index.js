import React, { useState } from 'react'
import { Plus } from '@strapi/icons';
import { Button } from '@strapi/design-system/Button';
import { Box } from '@strapi/design-system/Box';
import CourseModal from '../../components/CourseModal';
import EntityCard from '../../components/EntityCard';

function CoursesInputButton(props) {
    const { name, onChange, attribute} = props; 
    const [showModal, setShowModal] = useState(false);
    const [selectedEntityData, setSelectedEntityData] = useState({
        selectedCourse: null,
        entityName: '',
    });

    console.log("props", props);
    console.log("props.value",props);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = (entityData) => {
        setSelectedEntityData(entityData);
        setShowModal(false);
        onChange({ target: { name: name, value: entityData, type: attribute.type } });
    }
    return (
        <>
            <Box>
                {selectedEntityData.selectedCourse !== null && selectedEntityData.entityName !== '' ?
                    <EntityCard selectedEntityData={selectedEntityData} openModal={openModal} setSelectedEntityData={setSelectedEntityData} />
                    :
                    <Button onClick={openModal} startIcon={<Plus />}>Link Entity (Course, Event, Resource)</Button>
                }
            </Box>
            {showModal && <CourseModal handleClose={closeModal} />}
        </>
    )
}

export default CoursesInputButton