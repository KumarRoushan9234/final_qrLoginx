import { useEffect } from "react";
import useUserStore from "../store/userStore";

const Companies = () => {
  const { partners, fetchAllPartners } = useUserStore();

  useEffect(() => {
    console.log(partners);
    fetchAllPartners();
    console.log(partners);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Registered Companies
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((company) => {
          console.log("QR Code URL:", company.qrCode);
          return (
            <div
              key={company._id}
              className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-white">
                {company.companyName}
              </h2>
              <p className="text-gray-300">{company.email}</p>
              <p className="text-gray-300">{company.phone}</p>
              {company.qrCode ? (
                <img
                  src={company.qrCode}
                  alt="QR Code"
                  className="mt-3 w-24 h-24 mx-auto"
                />
              ) : (
                <p className="text-red-400 text-sm text-center mt-2">
                  QR Code not available
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
