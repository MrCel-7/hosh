const Contact = () => {
  return (
    <div className="flex w-full flex-col items-center py-20">
      <h1 className="font-bold text-4xl mb-40">CONTACT ME</h1>

      <div className="px-10 w-full">
        <div className="w-full flex rounded-xl border">
          <div className="flex-1 flex items-center justify-center">
            <img src="/gmail.png" className="w-100" />
          </div>
          <div className="flex-2 flex flex-col p-8 gap-7">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">
                HEY THERE! IT'S THE END OF THE SITE!
              </h1>
              <p className="text-lg">
                What do you think about my site? Want to make a website? Or
                wonder to know me more? Leave an email to contact me
              </p>
            </div>
            <input
              type="text"
              placeholder="What is your name?"
              className="w-full text-xl border rounded-md py-2 px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Email for us to feedback?"
              className="w-full text-xl border rounded-md py-2 px-4 outline-none"
            />

            <textarea
              type="text"
              placeholder="What do you want to tell us about?"
              className="w-full text-xl border rounded-md py-2 px-4 outline-none h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
