const controller = {};

const Person = require("../models/person");

controller.savePerson = async (req, res) => {
  const languages = req.body.languages;
  const experience = req.body.experience;
  const education = req.body.education;
  const biography = req.body.biography;
  const phone = req.body.phone;
  const name = req.body.name;
  const surname = req.body.surname;
  const picture = req.body.picture;
  const birthday = req.body.birthday;
  const job = req.body.job;
  //const iduser = req.user

   /* if (!name || !surname || !job || !biography || !picture || !birthday || !education || !experience || !languages || !phone) {
        res.status(400).send()
        return
    }  */
    
  try {
    const person = new Person({
      name: name,
      surname: surname,
      job: job,
      biography: biography,
      picture: picture,
      birthday: birthday,
      languages: languages,
      experience: experience,
      phone:phone,
      education:education,
    });
    await person.save();
    res.status(201).send(person._id);
  } catch (err) {
      console.log(err)
    res.status(500).send(err);
  }
};

controller.getPerson = async (req, res) => {
  const id = req.params.id;

  try {
    const profile = await Profile.findById(id);
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "El persona no encontrada" });
  }
};

module.exports = controller;
