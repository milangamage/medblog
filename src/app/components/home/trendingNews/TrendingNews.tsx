import Slider from 'react-slick';
import TrendingNewsCard from '@/components/blogs/TrendingNewsCard';
import { slickSettings } from '@/lib/CaresoulMainSettings';
import TrendingNewsCardSkeleton from '@/components/loading/TrendingNewsLoadingCard';

export default function TrendingNews({ blogs, loading }) {
  const settings = slickSettings();

  return (
    <section className="padding-container">
      <h2 className="main-topic">Trending news</h2>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
              <TrendingNewsCardSkeleton key={index} />
            ))
            : blogs?.map((blog) => (
              <TrendingNewsCard key={blog.id} blog={blog} />
            ))}
        </Slider>
    </section>
  );
}

