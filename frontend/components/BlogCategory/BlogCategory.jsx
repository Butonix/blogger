import Card from '../blog/Card/Card';

import './BlogCategory.scss';

const BlogCategory = ({ category, blogs }) => {
  return (
    <section className='blog-category'>
      <img
        className='blog-category__banner-img'
        src={`../images/categories/${category.name.toLowerCase()}.jpg`}
        alt='category banner'
      />
      {blogs.map((blog) => (
        <Card key={blog._id} blog={blog} />
      ))}
    </section>
  );
};

export default BlogCategory;
