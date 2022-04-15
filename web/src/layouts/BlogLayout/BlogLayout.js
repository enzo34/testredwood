import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const BlogLayout = ({ children }) => {
  const {isAuthenticated, currentUser, logOut} = useAuth()
  return (
    <>
    <Toaster />
    <header>
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                    <Link
                  className="hover:text-blue-800 transition duration-100"
                  to={routes.home()}
                >
                  Enzo Blog
                </Link>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <Link to={routes.about()} class="font-medium text-gray-500 hover:text-gray-900">A propos</Link>
              <Link to={routes.contact()} class="font-medium text-gray-500 hover:text-gray-900">Nous contacté</Link>
              {isAuthenticated ? (
                  <button type="button" onClick={logOut} className="font-medium text-gray-500 hover:text-gray-900">
                    Se déconnecter
                  </button>
              ) : (
                <Link to={routes.login()} className="font-medium text-gray-500 hover:text-gray-900">
                  Se connecter
                </Link>
              )}
            </div>
          </nav>
        </div>
       
      </header>
    
  
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout