const bfhlController = (req, res) => {
  try {
    const data = req.body?.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "data must be an array" });
    }

    let odd = [];
    let even = [];
    let alphabets = [];
    let special = [];
    let sum = 0;

    data.forEach(item => {
      const str = String(item);

      // Numbers
      if (/^-?\d+$/.test(str)) {
        const num = parseInt(str, 10);
        num % 2 === 0 ? even.push(str) : odd.push(str);
        sum += num;
      }
      // Alphabets only
      else if (/^[A-Za-z]+$/.test(str)) {
        alphabets.push(str.toUpperCase());
      }
      // Everything else = special
      else {
        special.push(str);
      }
    });

    // Concat string: reverse all letters + alternating caps
    const concat = alphabets.join("").split("").reverse()
      .map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
      .join("");

    // Fixed details (per assignment)
    res.json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
      special_characters: special,
      sum: sum.toString(),
      concat_string: concat
    });

  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
};

module.exports = { bfhlController };
