/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  nextAuth: {
    providers: [
      {
        name: "facebook",
        config: {
          clientId: "643328173891346",
          clientSecret: "2de1a21436f7d162c3cd4e0c3948536f",
        },
      },
    ],
  },
};

module.exports = nextConfig;
