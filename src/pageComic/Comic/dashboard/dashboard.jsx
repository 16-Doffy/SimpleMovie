import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function ComicThemeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Dashboard
        <ChevronDownIcon />
      </DropdownMenu.Trigger> 

      <DropdownMenu.Content 
        className="min-w-[200px] text-xl rounded-md shadow-lg border border-gray-200 p-1 mt-1"
        sideOffset={5}
      >
        {/* Nhóm thể loại phổ biến */}
        <DropdownMenu.Label className="px-2 py-1.5 rounded cursor-pointer">
          My collections
        </DropdownMenu.Label>
        <DropdownMenu.Item className="px-2 py-1.5 rounded cursor-pointer">
         Favourites
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-2 py-1.5  rounded cursor-pointer">
         Coming soon
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-2 py-1.5  rounded cursor-pointer">
        Friend
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="h-px  my-60" />
        

        {/* Action */}
        <DropdownMenu.Item className="px-2 py-1.5 text-white hover:bg-red-50 rounded cursor-pointer">
          Setting
        </DropdownMenu.Item>
         <DropdownMenu.Item className="px-2 py-1.5 text-white hover:bg-red-50 rounded cursor-pointer">
         Log out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}