// Libs
import { BeatLoader, ClipLoader } from 'react-spinners';
// Styled components
import { PageLoaderWrapper, CenteredLoaderWrapper } from './Laders.styled';

export const PageLoader = () => {
  return (
    <PageLoaderWrapper>
      <BeatLoader color="#ffc800" />
    </PageLoaderWrapper>
  );
};

export const CenteredLoader = () => {
  return (
    <CenteredLoaderWrapper>
      <ClipLoader color="#ffc800" size={20} />
    </CenteredLoaderWrapper>
  );
};
