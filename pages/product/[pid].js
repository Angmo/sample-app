import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const pid = ({ productList }) => {
    return (
        // Sticky Image
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                width: 2000,
                height: 2000,
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    margin: 0,
                    left: 0,
                    top: 0,
                    width: 500,
                    height: 500,
                    zindex: 10,
                }}
            >
                <Image
                    src="/images/tv.jpg"
                    width={"10000px"}
                    height={"10000px"}
                ></Image>
            </Box>

            <Box>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Box>
        </Box>
    );
};

export default pid;
