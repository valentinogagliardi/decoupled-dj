import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p>
        Assuming you created two posts in the database, you can access them
        here:
      </p>
      <ul>
        <li>
          <Link href="posts/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="posts/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
