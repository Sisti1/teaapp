// pages/signup.js

import React from "react";

const SignUp = () => {
	return (
		<div
			style={{
				
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
				
				backgroundImage:
                "url('https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1645021053/BW%20BLOG/Untitled-design---2022-02-16T194724.132_11zon.jpg')",
                marginTop: "-120px",
                fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundAttachment: "fixed",

			// Media query for smaller screens
        // Adjust styles as needed
        '@media (max-width: 768px)': {
			backgroundSize: "contain",
		  },
			}}
		>
			
		</div>
	);
};

export default SignUp;
