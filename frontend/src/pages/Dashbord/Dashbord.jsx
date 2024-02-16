import React from 'react'

const Dashbord = () => {
  return (
    <div>
      <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalendarIcon className="h-4 w-4" />
                Appointments
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Patients
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Users2Icon className="h-4 w-4" />
                Doctors
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Recent Orders</h1>
          </div>
          <form className="flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input placeholder="Search..." type="search" />
            </div>
          </form>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Order</TableHead>
                  <TableHead className="min-w-[150px]">Doctor</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead className="text-right">Photo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#3210</TableCell>
                  <TableCell>Dr. Olivia Martin</TableCell>
                  <TableCell className="hidden md:table-cell">Family doctor</TableCell>
                  <TableCell className="text-right">
                    <img
                      alt="Photo"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3209</TableCell>
                  <TableCell>Dr. Ava Johnson</TableCell>
                  <TableCell className="hidden md:table-cell">Dermatologist</TableCell>
                  <TableCell className="text-right">
                    <img
                      alt="Photo"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3204</TableCell>
                  <TableCell>Dr. Michael Johnson</TableCell>
                  <TableCell className="hidden md:table-cell">Cardiologist</TableCell>
                  <TableCell className="text-right">
                    <img
                      alt="Photo"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3203</TableCell>
                  <TableCell>Dr. Lisa Anderson</TableCell>
                  <TableCell className="hidden md:table-cell">Pediatrician</TableCell>
                  <TableCell className="text-right">
                    <img
                      alt="Photo"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3202</TableCell>
                  <TableCell>Dr. Samantha Green</TableCell>
                  <TableCell className="hidden md:table-cell">Psychiatrist</TableCell>
                  <TableCell className="text-right">
                    <img
                      alt="Photo"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Dashbord