import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-navy text-white" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <form className="space-y-6 animate-fadeIn">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-navy-light border-gray-700 text-white"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-navy-light border-gray-700 text-white"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="bg-navy-light border-gray-700 text-white min-h-[150px]"
            />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            <Mail className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;