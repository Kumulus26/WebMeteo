import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export function NavbarDark() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 rounded-lg"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo and Title */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5 text-white"
        >
          Météo
        </Typography>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <IconButton variant="text" color="white">
            <Cog6ToothIcon className="h-5 w-5" />
          </IconButton>
          <IconButton variant="text" color="white">
            <BellIcon className="h-5 w-5" />
          </IconButton>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-full max-w-xs md:max-w-md">
          <Input
            type="search"
            color="white"
            label="Taper ici..."
            className="pr-20 bg-transparent text-white border border-white focus:ring-2 focus:ring-white"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Go !
          </Button>
        </div>
      </div>
    </Navbar>
  );
}