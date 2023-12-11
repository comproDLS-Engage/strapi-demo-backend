// admin/src/components/TaskModal/index.js
import React, { useState } from "react";
import {
    ModalLayout,
    ModalHeader,
    ModalBody,
    Typography,
} from "@strapi/design-system";
import SearchEntitySection from "../SearchEntitySection";
import EntityDetailsSection  from "../EntityDetailsSection";

const TaskModal = (props) => {
    const { handleClose } = props;
    const [isCourseSelected, setIsCourseSelected] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState();

    return (
        <ModalLayout
            onClose={() => handleClose(null)}
            labelledBy="title"
            as="form"
            onSubmit={() => { }}
        >
            <ModalHeader>
                <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
                    comproDLS | Link Entity (Course, Event, Resource)
                </Typography>
            </ModalHeader>
            <ModalBody padding={'32px 16px 32px 32px'}>
                {!isCourseSelected ?
                    <SearchEntitySection setIsCourseSelected={setIsCourseSelected} setSelectedCourse={setSelectedCourse} />
                    :
                    <EntityDetailsSection selectedCourse={selectedCourse} setIsCourseSelected={setIsCourseSelected} handleClose={handleClose}/>
                }
            </ModalBody>
        </ModalLayout>
    );
};

export default TaskModal;