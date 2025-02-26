export default function BriefAndRequirement({ RequireMentTitle }) {
  console.log("RequireMentTitle>>>>>", RequireMentTitle);
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="all-service-heading-home">Brief And Requirement</h1>
          </div>
          <div className="col-lg-12 text-center mt-4 mb-4">
            <img
              src={RequireMentTitle.requirement_title_logo}
              alt={RequireMentTitle.requirement_title}
            />
          </div>
          <div className="col-lg-6 m-auto text-center">
            <p className="brf-text">
              {RequireMentTitle.requirement_description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
