import instance from "./router";

class AdminService {
  async HomePage() {
    return instance.get("/home");
  }

  async Brands() {
    return instance.get("/brand");
  }
  async service() {
    return instance.get("/service_detail");
  }
  async CreativeHouse() {
    return instance.get("/creative_house");
  }
  async HireUS() {
    return instance.get("/hire_us");
  }
  async Banners() {
    return instance.get("/banner_title");
  }
  async MarkatingHouse() {
    return instance.get("/marketing_house");
  }

  // POST API'S

  async FreeConsultation(data) {
    return instance.post("/free_consultation", data);
  }

  async ContactUs(data) {
    return instance.post("/contact", data);
  }
}

// Assign the instance to a variable
const adminServiceInstance = new AdminService();

// Export the variable
export default adminServiceInstance;
