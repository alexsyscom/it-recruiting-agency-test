import React, { useState, useEffect, useMemo } from "react";
import { Box, Container } from "@mui/material";

import {
  CustomizedDialogs,
  List,
  CardItem,
  Pagination,
  Filter,
} from "./components";

const styles = {
  display: "grid",
  gridTemplateRows: "auto auto auto",
  gridTemplateColumns: "repeat(4, 1fr)",
  rowGap: "40px",
  minHeight: "100vh",
};

const PAGE_SIZE = 15;

const App = () => {
  const [allImages, setAllImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredImages, setFilteredImages] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState(null);
  const [filter, setfilter] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setAllImages(data);
        setFilteredImages(data);
      });
  }, []);

  const paginationCount = useMemo(() => {
    return Math.ceil(filteredImages.length / PAGE_SIZE);
  }, [filteredImages]);

  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return filteredImages.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredImages]);

  const handleOpen = (url) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const deleteImage = (id) => {
    const newImagesList = filteredImages.filter((pic) => pic.id !== id);
    setFilteredImages(newImagesList);
  };

  const changeHandler = (e) => {
    setfilter(e.target.value);
  };

  const handlePaginationChange = (_, value) => {
    setCurrentPage(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFilteredImages(allImages.filter((image) => image.albumId === +filter));
  };

  return (
    <Container sx={{ mt: "40px" }}>
      <Box sx={styles}>
        <Filter
          filter={filter}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
        <List
          list={currentPageData}
          renderItem={(item) => (
            <CardItem
              item={item}
              key={item.id}
              clickHandler={handleOpen}
              deleteHandler={deleteImage}
            />
          )}
        />
        <Pagination
          paginationCount={paginationCount}
          currentPage={currentPage}
          handlePaginationChange={handlePaginationChange}
        />
      </Box>
      <CustomizedDialogs
        src={modalUrl}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </Container>
  );
};

export default App;
