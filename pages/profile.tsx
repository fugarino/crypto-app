import { withProtected } from "../src/hooks/route";

const Profile = () => {
  return <h1>profile</h1>;
};

export default withProtected(Profile);
