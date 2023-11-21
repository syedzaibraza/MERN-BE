const Home = async (req: any, res: any) => {
  try {
    res.status(200).json({ message: "hello world" });
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req: any, res: any) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};

export default { Home, Register };
