export const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken();
  
    // Handle all roles explicitly
    let cookieName;
    if (user.role === "Admin") cookieName = "adminToken";
    else if (user.role === "Patient") cookieName = "patientToken";
    else if (user.role === "Doctor") cookieName = "doctorToken";
    else cookieName = "token"; // fallback
  
    res
      .status(statusCode)
      .cookie(cookieName, token, {
        expires: new Date(
          Date.now() + (Number(process.env.COOKIE_EXPIRE) || 7) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: "Lax",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        message,
        user,
        token,
      });
  };
  