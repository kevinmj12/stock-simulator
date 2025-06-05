import AssetList from "@/components/asset/AssetList";
import AssetSummary from "@/components/asset/AssetSummary";
import { mockPortfolio } from "@/data/assets";
import styled from "styled-components";

const Assets = () => {
  return (
    <AssetsStyle>
      <AssetSummary portfolio={mockPortfolio} />
      <div className="divider" />
      <AssetList portfolio={mockPortfolio} />
    </AssetsStyle>
  );
};

const AssetsStyle = styled.div`
  display: flex;
  flex-direction: column;
  
  .divider {
    margin-bottom: 15px;
  }
`;

export default Assets;
