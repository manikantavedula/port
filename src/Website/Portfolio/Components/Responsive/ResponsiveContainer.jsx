import { createMedia } from "@artsy/fresnel";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const ResponsiveContainer = ({ children, Top }) => (
  <MediaContextProvider>
    <DesktopContainer Top={Top} Media={Media}>
      {children}
    </DesktopContainer>
    <MobileContainer Top={Top} Media={Media}>
      {children}
    </MobileContainer>
  </MediaContextProvider>
);

export default ResponsiveContainer;
