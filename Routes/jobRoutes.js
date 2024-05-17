const uuid = require("short-uuid")
const { Router } = require("express")
const jobApp = Router()

jobApp.get("/", (req, res) => {
  res.send("Subscribed!")
})

jobApp.get("/Info", (req, res) => {
  const info = [
    {
      id: 1,
      companyName: "Linear company",
      jobTitle: "Software Engineer",
      companyLogo: "/images/Linear.png",
      minPrice: "20",
      maxPrice: "30",
      salaryType: "Yearly",
      jobLocation: "Brussels",
      postingDate: "2023-11-03",
      experienceLevel: "Any experience",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 1,
      companyName: "Narcia",
      jobTitle: "Software Engineer",
      companyLogo: "/images/Linear.png",
      minPrice: "20",
      maxPrice: "30",
      salaryType: "Yearly",
      jobLocation: "Brussels",
      postingDate: "2023-11-03",
      experienceLevel: "Any experience",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 2,
      companyName: "Notion",
      jobTitle: "Web Developer",
      companyLogo: "/images/Notion.png",
      minPrice: "40",
      maxPrice: "50",
      salaryType: "Yearly",
      jobLocation: "San Francisco",
      postingDate: "2023-11-02",
      experienceLevel: "Internship",
      employmentType: "Temporary",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 3,
      companyName: "Spline studio",
      jobTitle: "Data Scientist",
      companyLogo: "/images/Spline.png",
      minPrice: "40",
      maxPrice: "50",
      salaryType: "Yearly",
      jobLocation: "Seattle",
      postingDate: "2023-10-28",
      experienceLevel: "Any experience",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 4,
      companyName: "Raycast corp",
      jobTitle: "UI/UX Designer",
      companyLogo: "/images/Raycast.png",
      minPrice: "40",
      maxPrice: "50",
      salaryType: "Monthly",
      jobLocation: "London",
      postingDate: "2023-10-05",
      experienceLevel: "Work remotely",
      employmentType: "Part-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 5,
      companyName: "Loom",
      jobTitle: "Frontend Developer",
      companyLogo: "/images/Loom.png",
      minPrice: "50",
      maxPrice: "75",
      salaryType: "Yearly",
      jobLocation: "London",
      postingDate: "2023-10-28",
      experienceLevel: "Intership",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 6,
      companyName: "Trainline group",
      jobTitle: "DevOps Engineer",
      companyLogo: "/images/Trainline.png",
      minPrice: "80",
      maxPrice: "120",
      salaryType: "Yearly",
      jobLocation: "Boston",
      postingDate: "2023-10-05",
      experienceLevel: "Intership",
      employmentType: "Temporary",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 1,
      companyName: "Linear company",
      jobTitle: "Software Engineer",
      companyLogo: "/images/Linear.png",
      minPrice: "30",
      maxPrice: "80",
      salaryType: "Yearly",
      jobLocation: "Brussels",
      postingDate: "2023-11-05",
      experienceLevel: "Any experience",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 2,
      companyName: "Notion",
      jobTitle: "Web Developer",
      companyLogo: "/images/Notion.png",
      minPrice: "40",
      maxPrice: "50",
      salaryType: "Yearly",
      jobLocation: "San Francisco",
      postingDate: "2023-10-28",
      experienceLevel: "Internship",
      employmentType: "Temporary",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 3,
      companyName: "Spline studio",
      jobTitle: "Data Scientist",
      companyLogo: "/images/Spline.png",
      minPrice: "40",
      maxPrice: "50",
      salaryType: "Yearly",
      jobLocation: "Seattle",
      postingDate: "2023-10-28",
      experienceLevel: "Any experience",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 4,
      companyName: "Raycast corp",
      jobTitle: "UI/UX Designer",
      companyLogo: "/images/Raycast.png",
      minPrice: "40",
      maxPrice: "50",
      salaryType: "Monthly",
      jobLocation: "London",
      postingDate: "2023-10-05",
      experienceLevel: "Work remotely",
      employmentType: "Part-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 5,
      companyName: "Loom",
      jobTitle: "Frontend Developer",
      companyLogo: "/images/Loom.png",
      minPrice: "50",
      maxPrice: "75",
      salaryType: "Yearly",
      jobLocation: "London",
      postingDate: "2023-10-28",
      experienceLevel: "Intership",
      employmentType: "Full-time",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
    {
      id: 6,
      companyName: "Trainline group",
      jobTitle: "DevOps Engineer",
      companyLogo: "/images/Trainline.png",
      minPrice: "80",
      maxPrice: "120",
      salaryType: "Yearly",
      jobLocation: "Boston",
      postingDate: "2022-10-05",
      experienceLevel: "Intership",
      employmentType: "Temporary",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
    },
  ]
  res.status(200).json(info)
})

jobApp.post("/post-job", async (req, res) => {
  var jobsCollection = req.jobsCollection
  const body = req.body
  body.createAt = new Date()
  body.jobId = "J"+uuid.generate()
  const result = await jobsCollection.insertOne(body)
  if (result.insertedId) {
    return res.status(200).send(result)
  } else {
    return res.status(404).send({
      message: "Something went wrong! Not Able to Insert Data",
      status: false,
    })
  }
})

jobApp.patch("/update-job/:id", async (req, res) => {
  var jobsCollection = req.jobsCollection
  const id = req.params.id
  const data = req.body
  const filter = { _id: new ObjectId(id) }
  const options = { upsert: true }
  const updateDoc = {
    $set: { ...data },
  }
  const result = await jobsCollection.updateOne(filter, updateDoc, options)
  res.send(result)
})

jobApp.post("/apply-job/:id", async (req, res) => {
  try {
    //To Add in Jobs Id
    const jobsCollection = req.jobsCollection;
    const JOBID = req.params.id;
    const data = req.body;
    // Find the job document by its ID
    const job = await jobsCollection.findOne({ jobId: JOBID});
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    // Check if the job document has an array named 'applications'
    if (!job.applications || !Array.isArray(job.applications)) {
      // If not, create a new 'applications' array
      job.applications = [];
    }
    // Add the new application data to the 'applications' array
    job.applications.push(data);

    // Update the job document with the modified 'applications' array
    const result = await jobsCollection.updateOne(
      { jobId: JOBID },
      { $set: { applications: job.applications } }
    );

    //To Add in Applicant's Database
    const profilesCollection = req.profilesCollection;
    const USERID = req.body.applicantId
    // Find the job document by its ID
    const profile = await profilesCollection.findOne({ userId: USERID});
    
    if (!profile) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the job document has an array named 'applications'
    if (!profile.appliedJobs || !Array.isArray(profile.appliedJobs)) {
      // If not, create a new 'applications' array
      profile.appliedJobs = [];
    }
    // Add the new application data to the 'applications' array
    profile.appliedJobs.push(JOBID);

    // Update the job document with the modified 'applications' array
    const uresult = await profilesCollection.updateOne(
      { userId: USERID },
      { $set: { appliedJobs: profile.appliedJobs } }
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({ message: "Application added successfully" });
    } else if(uresult.modifiedCount > 0){

    } else {
      return res.status(500).json({ message: "Failed to add application" });
    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }

});

jobApp.get("/all-jobs", async (req, res) => {
  var jobsCollection = req.jobsCollection
  const jobs = await jobsCollection.find({}).toArray()
  res.send(jobs)
})

jobApp.get("/edit-job/:id", async (req, res) => {
  var jobsCollection = req.jobsCollection
  const id = req.params.id
  const job = await jobsCollection.findOne({ _id: new ObjectId(id) })
  res.send(job)
})

jobApp.get("/my-jobs/:id", async (req, res) => {
  var jobsCollection = req.jobsCollection
  const jobs = await jobsCollection.find({ createdBy: req.params.id }).toArray()
  res.send(jobs)
})

jobApp.get("/get-job/:id", async (req, res)=>{
  var jobsCollection = req.jobsCollection
  var id = req.params.id
  const job = await jobsCollection.findOne({ jobId: id })
  res.status(200).send({ job })
})

jobApp.delete("/job/:id", async (req, res) => {
  var jobsCollection = req.jobsCollection
  var jobId = req.params.id
  jobId = { _id: new ObjectId(jobId) }
  const result = await jobsCollection.deleteOne(jobId)
  res.send(result)
})

module.exports = jobApp
