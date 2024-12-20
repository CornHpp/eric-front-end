import React from "react";
import { TextField } from "@/components/input";
import { FormLabel } from "@/components/FormLabel";
import { useForm } from "@/components/Form";
import { FormItem } from "@/components/Form/FormItem";
import MoneyImg from "@/assets/forgeGame/$.png";
import RightArrowImg from "@/assets/forgeGame/right-arrow.png";
import Card from "@/components/Card";
import Select from "@/components/Select";
import Upfile from "@/components/Upfile";
import DiscordImg from "@/assets/icon/discord.png";
import TelegramImg from "@/assets/icon/telegram.png";
import TwitterImg from "@/assets/icon/twitter.png";
import WebsiteImg from "@/assets/icon/website.png";
import { MoreOptions } from "./MoreOptions";
import GlowButton from "@/components/GlowButton";

export const config = [
  {
    name: "firstName",
    label: "Name",
    placeholder: "Typing",
    required: true,
    component: (props) => <TextField {...props}></TextField>,
  },
  {
    name: "lastName",
    label: "Ticker",
    placeholder: "Typing",
    required: true,
    component: (props) => (
      <TextField
        startAdornment={
          <img className="w-[16px] h-[16px]" src={MoneyImg}></img>
        }
        {...props}
      ></TextField>
    ),
  },
  {
    name: "email",
    label: "Description",
    required: true,
    placeholder: "Describe your game concept...",
    tooltip:
      "Your description is the spell that brings your game to life! Be creative - our Agent will transform your words into playable magic.",
    labelExtra: () => {
      return (
        <a className="text-[#09FFF0] flex items-center cursor-pointer">
          Example <img src={RightArrowImg} className="w-[16px] h-[16px]"></img>
        </a>
      );
    },
    component: (props) => (
      <TextField height="100px" multiline rows={4} {...props}></TextField>
    ),
  },
  {
    name: "password",
    label: "Game type",
    placeholder: "Select game type",
    required: true,
    component: (props) => (
      <Select
        options={[
          { name: "1", label: "Type1" },
          { name: "2", label: "Type2" },
          { name: "3", label: "Type3" },
        ]}
        {...props}
      ></Select>
    ),
  },
  {
    name: "confirmPassword",
    label: "Cover Image",
    required: true,
    component: (props) => <Upfile {...props}></Upfile>,
  },
  {
    name: "twitter",
    icon: <img className="w-[16px] h-[16px]" src={TwitterImg}></img>,
    label: "Twitter Link",
    placeholder: "Https://twitter.com/...",
    component: (props) => <TextField {...props}></TextField>,
  },
  {
    name: "telegram",
    icon: <img className="w-[16px] h-[16px]" src={TelegramImg}></img>,
    label: "Telegram link",
    placeholder: "Https://t.me/...",
    component: (props) => <TextField {...props}></TextField>,
  },
  {
    name: "discord",
    icon: <img className="w-[16px] h-[16px]" src={DiscordImg}></img>,
    label: "Discord link",
    placeholder: "Https://discord.gg/...",
    component: (props) => <TextField {...props}></TextField>,
  },
  {
    name: "website",
    icon: <img className="w-[16px] h-[16px]" src={WebsiteImg}></img>,
    label: "Website link",
    placeholder: "Https://...",
    component: (props) => <TextField {...props}></TextField>,
  },
];

export default function ForgeGame() {
  const { formValues, errors, handleChange, setErrors } = useForm({ config });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {
      firstName: formValues.firstName === "",
      lastName: formValues.lastName === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email),
      password: formValues.password === "",
      confirmPassword: formValues.confirmPassword !== formValues.password,
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      alert("Form submitted successfully!");
      console.log("Form Values:", formValues);
    }
  };

  const getConfigItem = (name: string) => {
    return {
      ...config.find((item) => item.name === name),
      formValues,
      errors,
      handleChange,
    };
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-[#09FFF0] text-[24px] font-bold">
        Forge a New Game
      </div>
      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: 800, mx: "auto", mt: 4, color: "white" }}
      >
        <div className="flex items-center">
          <FormItem
            {...getConfigItem("firstName")}
            className="!mr-[12px] !mt-[0]"
          />
          <FormItem {...getConfigItem("lastName")} className="!mt-[0]" />
        </div>

        <FormItem {...getConfigItem("email")} />
        <FormItem {...getConfigItem("password")} />
        <FormItem {...getConfigItem("confirmPassword")} />
        <MoreOptions getConfigItem={getConfigItem} />

        {/* <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button> */}
        <GlowButton onClick={() => {}} className="!text-[18px]">
          Buy Tokens
        </GlowButton>
      </Card>
    </div>
  );
}
