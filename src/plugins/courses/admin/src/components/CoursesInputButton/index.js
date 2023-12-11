import React, { useState } from 'react'
import { Plus } from '@strapi/icons';
import { Button } from '@strapi/design-system/Button';
import CourseModal from '../../components/CourseModal'

function CoursesInputButton() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <Button onClick={openModal} startIcon={<Plus />}>Link Entity (Course, Event, Resource)</Button>
            {showModal && <CourseModal handleClose={closeModal} />}
        </>
    )
}

export default CoursesInputButton