import {Box, List, Stack} from "@mui/material";
import {categories} from "../utils/constants.jsx";

const Categories = ({selectedCategory, setSelectedCategory}) =>(

    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
            <List
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                sx={{
                    background: category.name === selectedCategory && "#FC1503",
                    color: "white",
                }}
                key={category.name}
            >
        <Box sx={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </Box>
                <Box sx={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </Box>
            </List>
        ))}
    </Stack>
)

export default Categories;