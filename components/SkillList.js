import { motion } from "framer-motion";

export default function SkillList() {
  const animation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="h-lvh flex flex-1 items-center flex-col gap-36 max-lg:h-auto max-lg:gap-5 max-lg:my-10">
      <h1 id="skill" className="text-6xl text-center py-5 max-lg:text-4xl">
        My <span className="font-bold">Skills</span>
      </h1>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        className="flex-1"
      >
        <div className="py-5 grid grid-cols-4 font-bold gap-20 max-lg:gap-2 max-sm:grid-cols-2 max-lg:grid-cols-3 justify-center items-center">
          {/* next js */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex flex-col justify-center items-center rounded-md border-2 border-black  ">
            <div>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_196_515)">
                  <mask
                    id="mask0_196_515"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="57"
                    height="56"
                  >
                    <path
                      d="M28.4399 56C43.9039 56 56.4399 43.464 56.4399 28C56.4399 12.536 43.9039 0 28.4399 0C12.976 0 0.439941 12.536 0.439941 28C0.439941 43.464 12.976 56 28.4399 56Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_196_515)">
                    <path
                      d="M28.40 55.0667C43.3885 55.0667 55.5066 42.9485 55.5066 28C55.5066 13.0515 43.3885 0.93335 28.40 0.93335C13.4915 0.93335 1.37329 13.0515 1.37329 28C1.37329 42.9485 13.4915 55.0667 28.40 55.0667Z"
                      fill="black"
                      stroke="white"
                      strokeWidth="6"
                    />
                    <path
                      d="M46.9536 49.0063L21.9508 16.8H17.24V39.1907H21.0087V21.5861L43.9952 51.2852C45.0325 50.5911 46.0206 49.8292 46.9536 49.0063Z"
                      fill="url(#paint0_linear_196_515)"
                    />
                    <path
                      d="M39.9511 16.8H36.2178V39.2H39.9511V16.8Z"
                      fill="url(#paint1_linear_196_515)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_196_515"
                    x1="34.3511"
                    y1="36.2405"
                    x2="45.3955"
                    y2="49.9334"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_196_515"
                    x1="38.0840"
                    y1="16.8"
                    x2="38.0219"
                    y2="33.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_196_515">
                    <rect
                      width="56"
                      height="56"
                      fill="white"
                      transform="translate(0.439941)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="mt-5">Next JS</p>
          </div>
          {/* javacript */}
          <div className="w-40 h-40 md:w-48 md:h-48 bg-black flex flex-col justify-center items-center rounded-md border-2 border-black ">
            <div>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 56V0H56.5V56H0.5Z" fill="white" />
                <path
                  d="M37.1147 41.9176C38.1911 43.666 39.3609 45.3414 41.8389 45.3414C43.9202 45.3414 45.0122 40.3069 45.0122 42.8758C45.0122 41.1631 43.8829 40.5549 41.5931 39.5578L40.3378 39.0227C36.7149 37.4858 34.3053 35.56 34.3053 31.4923C34.3053 27.7434 37.1753 24.8905 41.66 24.8905C40.8536 24.8905 47.148 25.9965 48.8031 28.8929L40.8924 31.3927C40.0322 29.8558 43.102 29.2507 41.66 29.2507C40.1884 29.2507 39.2567 30.1794 39.2567 31.3927C39.2567 32.8922 40.19 33.4989 42.3405 34.4276L43.5998 34.9627C47.8698 36.7811 50.2778 38.6385 50.2778 42.8136C50.2778 47.3122 46.7249 49.7778 41.9556 49.7778C37.2905 49.7778 34.6413 47.4367 33.1667 40.5387L37.1147 41.9176ZM19.092 42.0451C19.8791 43.4545 21.0753 40.5387 22.7958 40.5387C24.4016 40.5387 25.3889 43.8885 25.3889 41.3607V24.8889H30.5736V42.1571C30.5736 47.3947 27.5356 49.7778 23.0991 49.7778C19.0904 49.7778 16.1971 47.0618 15.018 40.5387L19.092 42.0451Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="mt-5 text-white">Javacript</p>
          </div>
          {/* tailwind */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex flex-col justify-center items-center rounded-md border-2 border-black ">
            <div>
              <svg
                width="93"
                height="56"
                viewBox="0 0 93 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_196_521)">
                  <mask
                    id="mask0_196_521"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="93"
                    height="55"
                  >
                    <path
                      d="M0.974121 56H92.6105V1.01818H0.974121V56Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_196_521)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M46.7923 56C34.5741 56 26.9378 49.8909 23.8832 37.6727C28.465 43.7818 33.8105 46.0727 39.9196 40.5455C43.4052 43.6749 45.8963 41.1407 48.6539 38.3464C53.1458 33.7867 58.3453 28.5091 69.7014 28.5091C81.9196 28.5091 89.5559 34.6182 92.6105 46.8364C88.0287 40.7273 82.6832 38.4364 76.5741 39.9636C73.0885 40.8342 70.5974 43.3640 67.8398 46.1627C63.3479 50.7224 58.1484 56 46.7923 56ZM23.8832 28.5091C11.665 28.5091 4.02867 22.4 0.974121 10.1818C5.55594 16.2909 10.9014 18.5818 17.0105 17.0545C20.4961 16.1823 22.9872 13.6538 25.7408 10.8555C30.2367 6.29576 35.4362 1.01818 46.7923 1.01818C59.0105 1.01818 66.6468 7.12727 69.7014 19.3455C65.1196 13.2364 59.7741 10.9455 53.665 12.4727C50.1795 13.3433 47.6883 15.8735 40.9307 18.6718C40.4388 23.2315 35.2393 28.5091 23.8832 28.5091Z"
                      fill="black"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_196_521">
                    <rect
                      width="91.6364"
                      height="56"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.974121 56)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="mt-5">Tailwind</p>
          </div>
          {/* next js */}
          <div className="w-40 h-40 md:w-48 md:h-48 bg-black flex gap-10 flex-col justify-center items-center rounded-md border-2 border-black ">
            <div>
              <svg
                width="62"
                height="56"
                viewBox="0 0 62 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_196_513)">
                  <path
                    d="M31.2933 33.9258C34.5066 33.9258 37.1115 31.2727 37.1115 27.9999C37.1115 24.7271 34.5066 22.074 31.2933 22.074C28.08 22.074 25.4751 24.7271 25.4751 27.9999C25.4751 31.2727 28.08 33.9258 31.2933 33.9258Z"
                    fill="white"
                  />
                  <path
                    d="M31.2933 41.3334C47.3598 41.3334 60.3842 35.3639 60.3842 28.0001C60.3842 20.6363 47.3598 14.6667 31.2933 14.6667C15.2268 14.6667 2.20239 20.6363 2.20239 28.0001C2.20239 35.3639 15.2268 41.3334 31.2933 41.3334Z"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M19.9563 34.6667C27.9895 48.8383 39.5775 57.3419 45.8388 53.66C52.1001 49.9781 50.6637 35.505 42.6304 21.3334C34.5972 7.16172 23.0092 -1.34189 16.7479 2.34001C10.4866 6.02191 11.9231 20.4951 19.9563 34.6667Z"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M19.9562 21.3333C11.923 35.5049 10.4865 49.978 16.7478 53.6599C23.0091 57.3418 34.5971 48.8382 42.6303 34.6666C50.6636 20.495 52.1 6.02182 45.8387 2.33992C39.5774 -1.34197 27.9894 7.16164 19.9562 21.3333Z"
                    stroke="white"
                    strokeWidth="3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_196_513">
                    <rect
                      width="61.0909"
                      height="56"
                      fill="white"
                      transform="translate(0.747803)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="mt-5 text-white">React JS</p>
          </div>
        </div>
        <div className="mt-10 py-5 font-bold max-lg:hidden">
          <div className="w-40 h-40 md:w-48 md:h-48 bg-black flex flex-col justify-center items-center rounded-md border-2 border-black ">
            <div>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.2333 25.7833L30.2166 6.76659C29.6333 6.18325 28.8166 5.83325 27.9999 5.83325C27.1833 5.83325 26.3666 6.18325 25.7833 6.76659L21.6999 10.8499L26.4833 15.6333C26.9499 15.3999 27.4166 15.2833 27.9999 15.2833C29.9833 15.2833 31.4999 16.7999 31.4999 18.7833C31.4999 19.3666 31.3833 19.8333 31.1499 20.2999L35.8166 24.9666C36.2833 24.7333 36.7499 24.6166 37.3333 24.6166C39.3166 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.0999 39.3166 31.6166 37.3333 31.6166C35.3499 31.6166 33.8333 30.0999 33.8333 28.1166C33.8333 27.5333 33.9499 27.0666 34.1833 26.5999L29.5166 21.9333C29.3999 21.9333 29.2833 22.0499 29.1666 22.0499V34.1833C30.5666 34.6499 31.4999 35.9333 31.4999 37.4099C31.4999 39.4333 29.9833 40.9499 27.9999 40.9499C26.0166 40.9499 24.4999 39.4333 24.4999 37.4099C24.4999 35.9333 25.4333 34.6499 26.8333 34.1833V21.9333C25.4333 21.4666 24.4999 20.1833 24.4999 18.6666C24.4999 18.0833 24.6166 17.6166 24.8499 17.1499L20.0666 12.3666L6.76659 25.7833C6.18325 26.3666 5.83325 27.1833 5.83325 27.9999C5.83325 28.8166 6.18325 29.6333 6.76659 30.2166L25.7833 49.2333C26.3666 49.8166 27.1833 50.1666 27.9999 50.1666C28.8166 50.1666 29.6333 49.8166 30.2166 49.2333L49.2333 30.2166C49.8166 29.6333 50.1666 28.8166 50.1666 27.9999C50.1666 27.1833 49.8166 26.3666 49.2333 25.7833Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="mt-5 text-white">Git</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
