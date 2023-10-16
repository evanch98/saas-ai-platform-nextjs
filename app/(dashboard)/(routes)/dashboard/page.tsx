import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      Dashboard Page (Protected)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
