/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import { Layout, HeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { Plus } from '@strapi/icons';
import { Button } from '@strapi/design-system/Button';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import CourseModal from '../../components/CourseModal'


const HomePage = () => {
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
  }

  return (
    <Layout>
      <HeaderLayout
        title="Courses Plugin"
        subtitle="Get title, description or modules of selected Course."
        as="h2"
      />
      <ContentLayout>
        <Box background="neutral0" hasRadius={true} shadow="filterShadow">
          <Flex justifyContent="center" padding={8}>
            {selectedEntityData.selectedCourse !== null && selectedEntityData.entityName !== '' ?
              <p>{selectedEntityData.entityName}</p>
              :
              <Button onClick={openModal} startIcon={<Plus />}>Link Entity (Course, Event, Resource)</Button>
            }
          </Flex>
        </Box>
      </ContentLayout>
      {showModal && <CourseModal handleClose={closeModal} />}
    </Layout>
  );
};

export default HomePage;
