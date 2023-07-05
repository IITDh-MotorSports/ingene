import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import classes from "./Blog.module.css"

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph} = blog;
  return (
    <div className={classes.main}>
   
          <div className={classes.image}>
           <img className={`${classes.img}`} src={image} />
          </div>
         
      
      <div
        className="p-4 wow fadeInUp overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        
        <div className={classes.nameRole}>
          <h3>
            <div
              
              className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl text-center"
            >
             {title}
            </div>
          </h3>
          <p className="border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
         
        </div>
      </div>
      
    </div>
  );
};

export default SingleBlog;
