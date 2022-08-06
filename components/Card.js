import React from "react";
import Image from "next/image";
import { Link } from "@mui/material";
import { useRouter } from "next/router";

const Card = ({ id, imgsrc, title, price, description }) => {
    const router = useRouter();

    return (
        <div className="card">
            <div>
                <Link href={`/product/${id}`}>
                    <Image
                        src={imgsrc}
                        width={"400px"}
                        height={"200px"}
                        layout=""
                    />
                </Link>
            </div>
            <div className="card-inside">
                <div>
                    <h1>{router.query.pid}</h1>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};
export default Card;
