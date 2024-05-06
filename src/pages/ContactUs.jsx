

const ContactUs = () => {
  return (
    <div className="w-screen -mt-20  h-screen flex justify-center items-center dark:bg-gray-900">
      <div className="max-w-7xl dark:bg-gray-950 dark:text-white">
        <form className="w-full p-4 rounded shadow-md" action="" method="post">
          <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200">Leave a Comment</h2>
          <p className="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="mb-4 col-span-1 md:col-span-3">
              <textarea
                id="comment"
                name="comment"
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
                placeholder="Type Comment...*"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="Name*"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="Email*"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="id"
                name="id"
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="Id"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs