import Slider from 'react-slick';
import { slickCommonSettings } from '@/lib/CaresoulCommonSettings';
import MainBlogCard from '@/components/blogs/MainBlogCard';
import MainBlogCardLoading from '@/components/loading/MainBlogLoadingCard';

export default function Editors({ blogs, loading }) {
  const settings = slickCommonSettings();

  return (
    <section className="padding-container">
      <h2 className='main-topic'>Editor’s pick</h2>
      <Slider {...settings}>
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <MainBlogCardLoading key={index} />
          ))
        ) : (
          blogs?.map((blog) => (
            <MainBlogCard key={blog.blog_sub_titles_id} blog={blog} />
          ))
        )}
      </Slider>
    </section>
  );
}
