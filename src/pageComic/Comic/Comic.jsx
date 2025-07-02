import ContentComic from "./Content/home";
import ComicThemeDropdown from "./dashboard/dashboard";

export default function HomeComic() {
  return (
    <>
      <div>
        <ComicThemeDropdown />
      </div>
      <div>
        <ContentComic />
      </div>
    </>
  );
}
