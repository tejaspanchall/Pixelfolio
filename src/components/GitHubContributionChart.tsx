import CustomGitHubChart from "./CustomGitHubChart";

interface GitHubContributionChartProps {
  username: string;
}

const GitHubContributionChart = ({ username }: GitHubContributionChartProps) => {
  return <CustomGitHubChart username={username} />;
};

export default GitHubContributionChart;