import { Hero } from "@/src/Components/modules/Home/Hero";
import Specialties from "@/src/Components/modules/Home/Specialties";
import Steps from "@/src/Components/modules/Home/Steps";
import Testimonials from "@/src/Components/modules/Home/Testimonial";
import TopRatedDoctors from "@/src/Components/modules/Home/TopRatedDoctors";
import Head from "next/head";


const page = () => {
    return (
      <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Specialties />
        <TopRatedDoctors />
        <Steps />
        <Testimonials />
      </main>
    </>
    );
};

export default page;