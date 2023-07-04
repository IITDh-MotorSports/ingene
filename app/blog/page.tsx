import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

const Blog = () => {
  return (
    <div  style={{display: "block", paddingBottom: "10rem",}}>
      <Breadcrumb
        pageName="Our Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <br />
      <br />
      <br />
      <br />
      <br />
        <section id="blog" >
      <div className="container pt-10 md:pt-20 lg:pt-18">
      
     
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id}>
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
};

export default Blog;
