// Blog Data (Add more blogs here)
const blogData = {
    blog1: {
      title: "Razzle, Dazzle, Lookbook",
      image: "Assets/b1.png",
      content: `Here is the full content of the "Leather Jacket Styling Guide".
      Learn how to style your leather jackets for every occasion. 
      Explore color combinations, layering tips, and accessory pairings to elevate your look.`
    },
    blog2: {
      title: "Zippers, Buttons, and Stitching",
      image: "Assets/b2.png",
      content: `Beyond Fabric : Why the Right Zippers, Buttons, and Stitching Make All the Difference
 
      Luxury is all about being authentic, not just about being exclusive or expensive. From Swiss watchmakers to haute couture firms, the world's best brands have established their identities using generations-old methods that have been passed down through the ages. A tailored suit from Savile Row or a hand-stitched leather bag from Hermès are just two examples of how real craftsmanship guarantees that every detail is crafted with an unparalleled degree of attention and precision.
       
      The Importance of Premium Zippers
       
      Craftmanship and materials
      When it comes to luxury brands they prioritise metal zippers made of brass, aluminium or stainless steel zippers over plastic alternatives. High-end manufacturers such as YKK, Riri, and Lampo engineer zippers for superior smoothness, strength, and resistance to wear and tear. These are engineered such that zippers glide effortless without breaking or jamming.
       
      Aesthetic Appeal
      Premium zippers are not just about functionality, but also they add a touch of sophistication. Luxury brands have incorporated engraved logos, polished finishes, and custom pull tabs that elevate the overall design. These metal zippers enhance the elegance of dress, jackets and handbags.
       
      Durability and Wear Resistance
      High-end metal zippers are made to last longer than the cheap zippers that break over time.They are resistant to rust, oxidation, and misalignment, ensuring that garments retain their integrity even after years of use. Brands like Riri, YKk and excella are known for manufacturing premium zippers that can withstand repeated wear without loosing their functionality.
       
      The Role of Premium Buttons
      Luxury brands invest on metal, corozo (vegetable ivory), mother-of-pearl, and real horn buttons because they are more durable and brittle. Mass-market jacket buttons, on the other hand, are typically made of plastic, which ages over time.
       
      Customization in High-End Fashion
       
      Several high-end fashion labels provide personalised buttons that are imprinted with their initials or emblem. These individualised touches become a mark of craftsmanship, adding sophistication and authenticity.
       
       
      Functionality and Longevity
       
      Most of the luxury businesses have custom buttons that are embroidered with their emblem or monogram. In addition to adding flair and authenticity, the personal touches highlight the craftsmanship.
       
      Accuracy Stitching in High-End Jackets
       
      Premium buttons are not only aesthetically pleasing, but they are also expertly threaded to stay in place even after extreme use. To counteract loosening, some luxury brands even use stronger shanks or cross-stitching.
       
      Stitch Density and Technique
       
      Tighter stitches (8–10 stitches per inch) give the premium jackets stronger seams that are more resilient to fraying. Two techniques that help ensure that the clothing resists deterioration and lasts longer are saddle stitching and lock stitching.
       
      Aesthetic Perfection
       
      Stitching finely improves the precision of the design. Using contrasting or tone colours for the threads can draw attention to subtle features and show the brand's dedication to quality.
       
      Why these details maatter
       
      A luxury jacket should be classic, practical, and offer a sophisticated experience in addition to being aesthetically pleasing. Investing in well-made buttons, zippers, and stitching ensures that your clothing will be stylish and long-lasting for many years to come. Look closer the next time you go shopping for a jacket and notice the finer points that actually exemplify luxury, not necessarily the material.
       
       
       
      
      
      `
    },
    blog3: {
      title: "Choosing the Right Fabric",
      image: "Assets/b3.png",
      content: `Detailed content of "Why Quality Matters".
      Understand how the choice of fabric affects the durability, look, and feel of your products. Learn why investing in quality is worth it.`
    }
  };
  
  // ✅ Render the Blog Based on URL Parameter
  window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const blogKey = params.get('blog'); // e.g., blog1, blog2
  
    if (blogKey && blogData[blogKey]) {
      const blog = blogData[blogKey];
      document.getElementById('blog-content').innerHTML = `
        <h2>${blog.title}</h2>
        <img src="${blog.image}" alt="${blog.title}" style="width: 100%; max-width: 600px; margin: 20px 0;">
        <p>${blog.content}</p>
      `;
    } else {
      document.getElementById('blog-content').innerHTML = "<p>❌ Blog not found.</p>";
    }
  };
  


  function openContactPopup() {
    document.getElementById('contactPopup').style.display = 'flex';
  }
  