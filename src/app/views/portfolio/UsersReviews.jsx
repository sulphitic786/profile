import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, Badge, Box, Container, Grid, Rating, Typography } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fireStore } from "../../../config";

const UsersReviews = ({ reviews }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (reviews.length) setList(reviews); // Fetch data when the component mounts
  }, [reviews]);

  const testimonials = [
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4.5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
    },
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
    },
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. ",
      rating: 4.9,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
    },
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. t iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
      rating: 4,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      totalRating: 5
    }
    // Add more testimonial objects here...
  ];

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getDocs(
        query(collection(fireStore, "reviews"), where("status", "==", "active"))
      );
      const dataFromFirebase = response?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setList(dataFromFirebase);
      console.error("dataFromFirebase:", dataFromFirebase);
      // showAlert("success", "Data fetch successfully.");
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} xl={8} textAlign="center">
          <Badge badgeContent={list.length} color="secondary">
            <Typography variant="h4" sx={{ mb: 4 }}>
              Testimonials
            </Typography>
          </Badge>
          <Typography variant="body1" sx={{ mb: 4, pb: 2, mbMd: 5, pbMd: 0 }}>
            Over the years, I have received incredible reviews and feedback from clients worldwide,
            including Fiverr, as well as local and international projects. These testimonials
            reflect my dedication to delivering high-quality work, meeting deadlines, and ensuring
            client satisfaction. Whether it's crafting stunning web designs, developing robust
            applications, or providing tailored solutions, my clients consistently appreciate the
            value and professionalism I bring to every project.
          </Typography>
        </Grid>
      </Grid>

      <Grid container gap={0} justifyContent="center">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          slidesPerGroup={3}
          // pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: true
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1280: { slidesPerView: 3 }
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {list &&
            list?.map((testimonial, index) => (
              <SwiperSlide key={index} style={{ display: "flex", height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  boxShadow={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "stretch", // Make all cards same height
                    height: "100%" // Allow it to stretch to max height
                  }}
                >
                  <Box sx={{ textAlign: "center", flex: 1, px: 1, py: 1 }}>
                    <Avatar
                      alt={testimonial?.name}
                      src={testimonial?.image}
                      sx={{
                        width: 100,
                        height: 100,
                        boxShadow: 1,
                        borderRadius: "50%",
                        marginX: "auto"
                      }}
                    />
                    <Typography variant="h5">{testimonial?.name}</Typography>
                    <Typography variant="body" color="primary">
                      {testimonial?.location}
                    </Typography>
                    <br />
                    <Typography variant="body" color="info">
                      {testimonial?.date}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      <FormatQuoteIcon sx={{ fontSize: "15px" }} />
                      {testimonial?.message}
                      <FormatQuoteIcon sx={{ fontSize: "15px" }} />
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
                      <Rating value={testimonial?.rating} precision={0.5} readOnly />
                      <Box sx={{ ml: 1, fontWeight: "bold", fontSize: "18px" }}>
                        {testimonial?.rating}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </SwiperSlide>
            ))}
        </Swiper>
      </Grid>
    </Container>
  );
};

export default UsersReviews;
